import { rejects } from "assert";

export type IRandomUser = {
    email: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    picture: { large: string };
};

const convertRandomUser = (result: unknown) => {
    const { email, name, picture } = result as IRandomUser;
    return { email, name, picture };
};

// 이 함수의 반환 타입은 Promise<IRandomUser>이다. 파라미터는 없다.
export const fetchRandomUser = (): Promise<IRandomUser> => {
    return new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then((data: unknown) => {
                console.log(data); // convertRandomUser를 구현하고자 할 때 사용
                const { results } = data as { results: IRandomUser[] };
                resolve(convertRandomUser(results[0]));
            })
            .catch(error => {
                reject(error);
            });
    });
};
