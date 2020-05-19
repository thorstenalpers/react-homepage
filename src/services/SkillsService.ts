
export interface ISkill {
    name: string;
    value: number;
}

const skills: Array<ISkill> = [
    {
        name: 'C#',
        value: 90
    },
    {
        name: 'ASP.net Core',
        value: 80
    },
    {
        name: 'Git',
        value: 80
    },
    {
        name: 'ASP.net MVC 5',
        value: 70
    },
    {
        name: 'HTML',
        value: 60
    },
    {
        name: 'CSS',
        value: 60
    },
    {
        name: 'Javascript',
        value: 60
    },
    {
        name: 'Angular',
        value: 60
    },
    {
        name: 'Typescript',
        value: 50
    },
    {
        name: 'Sql',
        value: 50
    },
    {
        name: 'Batch',
        value: 50
    },
    {
        name: 'RabbitMQ',
        value: 40
    },
    {
        name: 'Python',
        value: 20
    },
    {
        name: 'Java',
        value: 20
    },
    {
        name: 'Matlab',
        value: 20
    },
    {
        name: 'Docker',
        value: 10
    }];


export default {
    getSkills() {
        return skills;
    }
};
