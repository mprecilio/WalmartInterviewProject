package walmart.walmart.utils;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendingMail {


	////////////////////////////////////////////Receives an EMAIL and TOKEN\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	public static void sendMail(String email, String username,String token) throws MessagingException {

		Properties properties = new Properties();

		properties.put("mail.smtp.auth", true);
		properties.put("mail.smtp.host", "smtp.gmail.com");
		properties.put("mail.smtp.port", 587);
		properties.put("mail.smtp.starttls.enable", true);
		properties.put("mail.transport.protocl", "smtp");

		String myEmail = System.getenv("2108_EMAIL");
		String myPassword = System.getenv("2108_PASSWORD");
		
		Session session = Session.getInstance(properties, new Authenticator() {

			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(myEmail, myPassword);
			}
		});
		Message message = prepareMessage(session, myEmail, username, email, token);

		Transport.send(message);
	}


	///////////////////////// Message\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	private static Message prepareMessage(Session session, String myEmail,String username, String email, String token) {


		try {
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(myEmail));
			message.setRecipient(Message.RecipientType.TO, new InternetAddress(email));
			System.out.println("selected receipient: " + email);
			message.setSubject("Walmart Student Portal: Reset Your Password");
			String html = "<a href='http://localhost:3000/reset-pass/" +token+"/"+username+"'>Reset password link</a>";
			message.setContent(html, "text/html");

			return message;

		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

}
