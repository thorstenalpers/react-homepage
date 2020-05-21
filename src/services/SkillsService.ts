
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
        name: 'Scrum',
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
        name: 'Software Architektur',
        value: 60
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
        name: 'Azure',
        value: 50
    },
    {
        name: 'Microservices',
        value: 40
    },
    {
        name: 'RabbitMQ',
        value: 40
    },
    {
        name: 'Typescript',
        value: 40
    },
    {
        name: 'React',
        value: 40
    },
    {
        name: 'Azure CLI + Azure Rest API',
        value: 40
    },
    {
        name: 'Powershell',
        value: 30
    },
    {
        name: 'Angular',
        value: 20
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
        value: 20
    }];


export default {
    getSkills() {
        return skills;
    }
};
