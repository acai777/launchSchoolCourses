interface UserProfile {
  readonly [key: string]: string;
  hah: string;
}

const user: UserProfile = {
  name: "Ji",
  email: "ji@jimail.com",
  hah: 'hey'
};


user.hah = 'hello';