package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features"}, format = {"json:target/Reports/cucumber.json", "html:target/Reports/cucumber-html-report"}, glue ="Steps" )
public class TestRunner {

    
}
