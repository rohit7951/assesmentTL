package cucumber.Options;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "/Users/rroza/Documents/TL_Assignment/sdet-interview-exercise-master/server/cards/PostDeploymentTests/APIframework/src/test/java/features/eligibilityCheck.feature",
	glue = {"stepDefinitions" }, plugin = "json:/Users/rroza/Documents/TL_Assignment/sdet-interview-exercise-master/server/cards/PostDeploymentTests/APIframework/target/jsonReports/cucumber-report.json")
public class TestRunner {

}
	