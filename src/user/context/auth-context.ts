import React from 'react';
import type { User } from '../types';

export interface IAuthContext extends AuthState {
	methods: AuthMethods;
}

export interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	accessToken: string | null;
	profile: User | null;
}

interface AuthMethods {
	login(data: Pick<IAuthContext, 'accessToken' | 'profile'>): void;
	logout(): void;
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);
AuthContext.displayName = 'AuthContext';
