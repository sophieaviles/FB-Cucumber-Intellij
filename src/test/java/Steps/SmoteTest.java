package Steps;


import java.util.concurrent.TimeUnit;


import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import library.Utility;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import cucumber.api.java.en.Given;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class SmoteTest {


    WebDriver driver;
    int count=0;



        @Given("^I have a valid set of data and access to registration page$")
        public void i_have_a_valid_set_of_data_and_access_to_registration_page () throws Throwable
        {



        ChromeOptions ops = new ChromeOptions();
        ops.addArguments("--disable-notifications");

        System.setProperty("webdriver.chrome.driver",
                "C:\\Users\\Sofia.Aviles\\Documents\\WebDrivers\\chromedriver.exe");
        driver = new ChromeDriver(ops);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.get("http://www.facebook.com");
        Utility.captureScreenshot(driver, "PageLoaded");

        }

        @When("^I enter valid (.*) and valid (.*)$")
        public void I_enter_valid_username_and_valid_password (String username, String password) throws Throwable
        {


            System.out.println("Registering: " + username + "" + password);
            driver.findElement(By.id("email")).sendKeys(username);
            driver.findElement(By.id("pass")).sendKeys(password);
            Utility.captureScreenshot(driver, "UserandPass_Typed");


        }

        @Then("^User should be able to login sucessfully$")
        public void userShouldBeAbleToLoginSucessfully () throws Throwable
        {


        driver.findElement(By.id("loginbutton")).click();
        Thread.sleep(2000);

        Utility.captureScreenshot(driver, "Loginsuscefull" );

        }


        @And("^User type a (.*) to perform a search$")
        public void userTypeANameToPerformASearch(String name) throws Throwable
        {
            driver.findElement(By.xpath("//input[contains(@class,'_1frb')]")).sendKeys(name);
            Utility.captureScreenshot(driver, "Searchkey_typed");
            driver.findElement(By.xpath("//input[contains(@class,'_1frb')]")).sendKeys(Keys.ENTER);
            Thread.sleep(3000);

            Utility.captureScreenshot(driver, "Suscessfull_search");

        }

        @Then("^User should be able to select profile$")
            public void userShouldBeAbleToSelectProfile() throws Throwable
        {
            Thread.sleep(3000);
            driver.findElement(By.xpath("//a[contains(@href,'/profile.php?id=100000379590124&ref=br_rs')]")).click();
            Utility.captureScreenshot(driver, "Suscessfull_profileSelection" );
            Thread.sleep(1000);
        }


        @And("^User should be able to post on profile wall$")
        public void userShouldBeAbleToPostOnProfileWall () throws Throwable
        {

        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(By.xpath("//div[contains(@class,'_1mf _1mj')]")));
        actions.click();
        actions.sendKeys("Hola Mundo!!!  :)  ");
        Thread.sleep(2000);
        actions.build().perform();

        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath("//button[contains(@class,'_1mf7 _4jy0 _4jy3 _4jy1 _51sy selected _42ft')]"))).click();

        Utility.captureScreenshot(driver, "Suscessfull_post" );
        Thread.sleep(2000);
        driver.quit();

        }



}
