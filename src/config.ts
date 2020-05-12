// configuration information
export const Config = {
    serverport: process.env.PORT || 3000,
    secret: process.env.SECRET || "some-secret-goes-here",
    tokenLife: 1800,
    url: process.env.MONGOURL || "mongodb+srv://admin:cisc474@cluster0-yzlbb.mongodb.net/test?retryWrites=true&w=majority"
};
