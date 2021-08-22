import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('http://localhost:3000/login')

WebUI.setText(findTestObject('Object Repository/Post-login/Page_React App/input_Username_username'), 'admin')

WebUI.setEncryptedText(findTestObject('Object Repository/Post-login/Page_React App/input_Password_password'), 'RAIVpflpDOg=')

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/span_Login'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Post-login/Page_React App/h2_News'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/img_Welcome Matthew Precilio_MuiAvatar-img'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/li_View profile'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Post-login/Page_React App/h2_admin'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/button_adminName Matthew PrecilioAddress 10_01f39a'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/img_Welcome Matthew Precilio_MuiAvatar-img'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/li_Edit profile'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/label_Profile photo'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/svg_Welcome Matthew Precilio_MuiSvgIcon-root'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/svg_Welcome Matthew Precilio_MuiSvgIcon-root_1'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/a_News'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Post-login/Page_React App/h1_404 Resource not found'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/img_Welcome Matthew Precilio_MuiAvatar-img_1'))

WebUI.click(findTestObject('Object Repository/Post-login/Page_React App/li_Logout'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Post-login/Page_React App/h1_Login'))

