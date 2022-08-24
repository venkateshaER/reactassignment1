import IUserList from "../Models/IUserList";

export class UserService{
    private static users:IUserList[]=[
        {
            sNo:"A001",
            name:"ram",
            age:25,
            designation:"software Engineer",
            company:'deloitte'
        },
        {
            sNo:"A002",
            name:"krish",
            age:30,
            designation:"sr. Software Engineer",
            company:'hashedIn'
        },
        {
            sNo:"A001",
            name:"jhon",
            age:25,
            designation:"Team lead",
            company:'deloitte'
        },
        {
            sNo:"A001",
            name:"wilson",
            age:40,
            designation:"Project manager",
            company:'deloitte'
        }
    ];
    public static getAllUsers(){
        return this.users;
    }
}