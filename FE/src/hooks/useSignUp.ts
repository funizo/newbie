import { useState, useCallback } from "react";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebasedb";

interface SignUpData {
    email: string;
    password: string;
    tag: string;
    nickname: string;
}

interface SignUpResult {
    signUp: (data: SignUpData) => Promise<void>;
    error: string | null;
    loading: boolean;
}

export const useSignUp = (): SignUpResult => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const signUp = useCallback(async (data: SignUpData): Promise<void> => {
        setError(null);
        setLoading(true);
        try {
            //이메일 중복확인
            const emailValidation = query(
                collection(db, "users"),
                where("email", "==", data.email)
            );

            const emailValidationResult = await getDocs(emailValidation);
            if (!emailValidationResult.empty) {
                throw new Error("이미 등록된 이메일 입니다.");
            }

            //닉네임 중복 확인
            const nicknameValidation = query(
                collection(db, "users"),
                where("nickname", "==", data.nickname)
            );
            const nicknameValidationResult = await getDocs(nicknameValidation);
            if (!nicknameValidationResult.empty) {
                throw new Error("이미 사용 중인 닉네임입니다.");
            }

            // Firestore에 사용자 데이터 추가
            await addDoc(collection(db, "users"), {
                email: data.email,
                password: data.password, // 암호를 그대로 저장하지 않는 것이 보안에 더 안전함 (암호화 고려)
                tag: data.tag,
                nickname: data.nickname,
                createdAt: new Date(),
            });

            setLoading(false);
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
            throw err;
        }
    }, []);

    return { signUp, error, loading };
};
