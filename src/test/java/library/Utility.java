package library;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import java.io.File;
//import java.text.DateFormat;
//import java.text.SimpleDateFormat;
//import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;

import org.apache.commons.io.FileUtils;

public class Utility {

    public static void captureScreenshot(WebDriver driver, String screenshotName)
    {

        try
        {
            int sr= ThreadLocalRandom.current().nextInt(1,100000);
            TakesScreenshot ts=(TakesScreenshot)driver;
            File source = ts.getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(source, new File("./Screenshots/"+screenshotName+sr+".png"));
            System.out.println("Screenshot taken");

        }


        catch (Exception e)

        {

            System.out.println("Exception while taking screenshot"+e.getMessage());

        }

    }



}
