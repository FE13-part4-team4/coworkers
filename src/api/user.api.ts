import axiosInstance from '@/api/axiosInstance';
import { GroupPageInfo } from '@/types/teampagetypes';
import { Membership, User } from '@/types/usertypes';

export const getGroupPageInfo = async (groupId: string): Promise<GroupPageInfo> => {
  const res = await axiosInstance.get(`/user/memberships`);
  const memberships: Membership[] = res.data;

  const matched = memberships.find((m) => String(m.group.id) === groupId);
  if (!matched) throw new Error('No matching group found');

  return {
    role: matched.role,
    group: {
      id: matched.group.id,
      name: matched.group.name,
    },
  };
};

export const fetchUser = async (): Promise<User> => {
  const { data } = await axiosInstance.get('/user');
  return data;
};

export const getUserGroupList = async (): Promise<{ id: number }[]> => {
  const res = await axiosInstance.get('/user/memberships');
  const memberships: Membership[] = res.data;

  return memberships.map((m) => ({
    id: m.group.id,
  }));
};
