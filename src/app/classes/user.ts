export class User {

    valueOne!:number;
    valueTwo!:number;
    total!:number;

    public sum(valueOne:number, valueTwo:number):number
    {
        this.total = valueOne + valueTwo;

        return this.total;
    }

}
