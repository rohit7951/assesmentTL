package resources;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Properties;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

public class Utils {

	public static RequestSpecification reqSpec;
	ResponseSpecification resSpec;

	public RequestSpecification requestSpecification() throws IOException {
		
		
		if(reqSpec ==null) {

		PrintStream log = new PrintStream(new FileOutputStream("logging.txt"));

		reqSpec = new RequestSpecBuilder().setBaseUri(getglobalValue("baseURI"))
				.addFilter(RequestLoggingFilter.logRequestTo(log)).addFilter(ResponseLoggingFilter.logResponseTo(log))
				.setContentType(ContentType.JSON).build();

		return reqSpec;
		}
		return reqSpec;
	}

	public ResponseSpecification responseSpecification() {

		resSpec = new ResponseSpecBuilder().expectContentType(ContentType.JSON).build();

		return resSpec;
	}

	public static String getglobalValue(String key) throws IOException {

		Properties prop = new Properties();
		String curDir = System.getProperty("user.dir");
		FileInputStream fis = new FileInputStream(curDir + "/src/test/java/resources/global.properties");
		prop.load(fis);
		return prop.getProperty(key);
	}

}
