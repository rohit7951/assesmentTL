Feature: Validating credit card eligibility check API 

Scenario Outline: Verify which credit card the person is eligible for 

	Given I provide the "<name>" "<email>" and "<postcode>" 
	When I call the EligibiltyCheckAPI with Post http request 
	Then the API call is success with status code 200 
	And the "eligibleCards" in the response body is "<cards>" 
	
	Examples: 
	
		|name |email                |postcode| cards |
		|Boris|Boris.Boris@gmail.com|SE15JX  | C1    |
		|Angela|angela.angela@gmail.com|SE15JX  | C1,C2   |
		|Theresa|theresa.theresa@gmail.com|SE15JX  | C2    |
		|abc|theresa.theresa@gmail.com|SE15JX  |     |
		
		
		
Scenario Outline: Verify error code for missing fields in the payload 

	Given I provide "<name>" "<email>" and "<postcode>" with empty fields 
	When I call the EligibiltyCheckAPI with Post http request 
	Then the API call is failed with status code 400 
	
	Examples: 
	
		|name   |email                    |postcode|
		|       |Boris.Boris@gmail.com    |SE15JX  | 
		|Angela |                         |SE15JX  |
		|Theresa|theresa.theresa@gmail.com|        |
		
		
		
		