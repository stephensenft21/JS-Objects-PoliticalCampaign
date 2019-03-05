const districtArray = [];

const platformObject = {
    Taxes: "",
    Jobs: "",
    Infrastructure: "",
    Health: "",
    crimeAndEnforcement: "",
};

const donations = [];


const calender = {

    date: "",
    description: ""
};

const volunteerInfo = {
    Name: "",
    Address: "",
    Email: "",
    phoneNumber: "",
    Availability: "",
    Activites: ""

};

const biography = [];

const images = {
    headShot: "",
    familyPic: "",
    constituents: ""
};

const mission = [];
const registration = [];

const addDistrict = (districName) => {
    districtArray.push(districtName);

};

const addPlatform = (platformTaxes, platformJobs, platformInf,
    platformHealth, platformCrime) => {
    platformObject = platformTaxes;
    platformObject = platformJobs;
    platformObject = platformInf;
    platformObject = platformHealth;
    platformObject = platformCrime;

};

const addDonation = (donationLink) => {
    donations.push(donationLink);
};


const addEvent = (eventDate, eventDescription) => {
    calender.date = eventDate;
    calender.description = eventDescription;
};

const addVolunteer = (volName, volAddress, volEmail, volPhone,
    volAvailability, volActivity) => {
    volunteerInfo.name = volName;
    volunteerInfo.address = volAddress;
    volunteerInfo.phone = volPhone;
    volunteerInfo.Email = volEmail;
    volunteerInfo.availability = volAvailability;
    volunteerInfo.activity = volActivity
};

const addBiography = (bio) => {
    biography.push(bio);
};


const addImages = (headImage, familyImage, constImage) => {
images.headShot = headImage; 
images.familyPic = famImage;
images.constituents = constImage; 
};

const addMission = (missionStatement) =>{
    mission.push(missionStatement);
};

const addRegistration = (regInfo) =>{
    registration.push(regInfo);
    
};


