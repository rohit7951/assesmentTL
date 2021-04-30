package stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import personDetailsPojo.AddDetails;
import resources.TestDataBuild;
import resources.Utils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.junit.Assert;
import static io.restassured.RestAssured.given;

public class Stepdefinition extends Utils {

	RequestSpecification res;
	Response response;

	TestDataBuild data = new TestDataBuild();

	@Given("I provide the {string} {string} and {string}")
	public void i_provide_the_and(String Name, String Email, String Address) throws IOException {
		res = given().spec(requestSpecification()).body(data.getPayload(Name, Email, Address));

	}

	@When("I call the EligibiltyCheckAPI with Post http request")
	public void i_call_the_post_http_request() {

		response = res.when().post("/eligibility/check").then().spec(responseSpecification()).extract().response();
	}

	@Then("the API call is success with status code {int}")
	public void the_api_call_is_success_with_status_code(int expectedStatusCode) {

		Assert.assertEquals(response.getStatusCode(), expectedStatusCode);
	}

	@Then("the {string} in the response body is {string}")
	public void the_in_the_response_body_is(String keyValue, String ExpectedValue) {

		String arr[] = ExpectedValue.split(",");

		String resp = response.asString();
		JsonPath js = new JsonPath(resp);

		List<String> ll = new ArrayList<>();

		ll = js.getList(keyValue);

		if (!(ll.isEmpty())) {

			for (int i = 0; i < arr.length; i++) {
				if (arr[i] == ll.get(i)) {
					Assert.assertEquals(ll.get(i), arr[i]);
				} else {
					Assert.assertEquals(ll.get(i), arr[i]);
				}
			}
		} else {
			Assert.assertEquals(js.getList(keyValue).isEmpty(), ExpectedValue.isEmpty());
		}
	}

	@Given("I provide {string} {string} and {string} with empty fields")
	public void i_provide_and_with_empty_fields(String Name, String Email, String Address) throws IOException {
		AddDetails obj = new AddDetails();

		if (Name.isEmpty()) {
			obj.setEmail(Email);
			obj.setAddress(Address);
		} else if (Email.isEmpty()) {
			obj.setName(Name);
			obj.setAddress(Address);

		} else if (Address.isEmpty()) {
			obj.setName(Name);
			obj.setEmail(Email);

		}

		res = given().spec(requestSpecification()).body(obj);
	}

	@Then("the API call is failed with status code {int}")
	public void the_api_call_is_failed_with_status_code(int StatusCode) {
		Assert.assertEquals(response.getStatusCode(), StatusCode);

	}

}
