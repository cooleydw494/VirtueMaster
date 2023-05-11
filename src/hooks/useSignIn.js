import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Custom hook to handle sign in functionality
const useSignIn = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signIn = async (values, navigation) => {
        setLoading(true);
        setError(null);
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            setLoading(false);
            navigation.navigate('HomeScreen');
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return { signIn, loading, error, setLoading, setError };
};

export default useSignIn;