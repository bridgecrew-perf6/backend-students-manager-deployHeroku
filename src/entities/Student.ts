export class Student {
    public readonly _id!: number;

    public name!: string;
    public email!: string;
    public cpf!: string;
    public age!: number

    constructor(props: Omit<Student, '_id'>) {
        Object.assign(this, props)
    };
}