"use client";
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

const handleLogout = async () => {
  try {
    // Trigger the signOut function
    await signOut({
      callbackUrl: '/',
    });
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

export default function LogoutButton() {
  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  );
}
