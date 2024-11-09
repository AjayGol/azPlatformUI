import React from 'react';
export interface UserProfile {
    prid: string;
    firstName: string;
    lastName: string;
    email: string;
    lastVisited?: string;
    territoryName?: string;
    proxy?: boolean;
}
export interface ExtraProfileSettings {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}
export interface UserProfileTypes {
    userProfile?: UserProfile;
    handleLogout?: () => void;
    extraProfileSettings?: ExtraProfileSettings[];
    userProfileArray: UserProfile[];
}
