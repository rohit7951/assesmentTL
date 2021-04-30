package resources;

import personDetailsPojo.AddDetails;

public class TestDataBuild {

	public AddDetails getPayload(String Name, String Email, String Address) {
		AddDetails obj = new AddDetails();
		obj.setName(Name);
		obj.setEmail(Email);
		obj.setAddress(Address);

		return obj;
	}

}
