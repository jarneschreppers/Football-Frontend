export interface Response {
    status: 'error' | 'success';
    errorMessage?: string;
}

export interface StatusMessage {
    message: string;
    type: 'error' | 'success';
}

export interface Player {
    id: number;
    name: string;
    birthdate: string;
    birthplace: string;
    position: string;
}
