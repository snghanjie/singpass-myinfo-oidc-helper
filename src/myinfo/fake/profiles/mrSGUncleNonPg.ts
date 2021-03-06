import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_NON_PG;

export const mrSGUncleNonPg: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.pioneergen.message.code = "1";
		profile.pioneergen.message.desc = "We regret that you are not eligible for the Pioneer Generation Package.  For further enquiries, please contact 1800-2222-888.";
		profile.pioneergen.quantum.value = "0.00";
		profile.dob = {
			lastupdated: "2021-01-01",
			source: "1",
			classification: "C",
			value: "1955-01-01",
		};

		return profile;
	},
};
