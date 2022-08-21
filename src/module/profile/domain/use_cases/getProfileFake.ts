import ProfileDetailsFakeRepository from "../../data/fake_api/ProfileDetailsFakeRepository";

export default async function getProfileFake(){
    return new ProfileDetailsFakeRepository().getProfileFake();
}