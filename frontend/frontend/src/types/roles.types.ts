import React from 'react';

export const UserRole = {
  ADMIN: 1,
  EMPLOYEE: 2,
  CUSTOMER: 3,
} as const;

export type UserRoleType = typeof UserRole[keyof typeof UserRole];

export interface RoleBasedLayout {
  children: React.ReactNode;
}