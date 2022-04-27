export class Student {
    public readonly id!: number;

    public name!: string;
    public email!: string;
    public cpf!: string;
    public age!: number

    constructor(props: Omit<Student, 'id'>) {
        Object.assign(this, props)
    };
}