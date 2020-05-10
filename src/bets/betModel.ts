export class BetModel {


    public static fromObject(object: any): BetModel {
        const b: BetModel = new BetModel();
        b.title = object.title;
        b.description = object.description;
        b.creator = object.creator;
        b.userBets = object.userBets;
        b.outcomes = object.outcomes;
        b.created = object.created;
        b.cutoff = object.cutoff;        
        return b;
    }

    public id = "";
    public title = "";
    public description = "";
    public creator = "";
    public userBets: string[] = [];
    public outcomes: string[] = [];
    public created = "";
    public cutoff = "";
}