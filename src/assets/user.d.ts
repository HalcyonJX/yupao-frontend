/**
 * 用户类别
 */
export type userType = {
  id : number;
  username : string;
  avatarUrl : string;
  gender : number;
  phone : string;
  email : string;
  userStatus : string;
  userRole : string;
  planetCode : string;
  tags: string[];
  createTime:Date;
};