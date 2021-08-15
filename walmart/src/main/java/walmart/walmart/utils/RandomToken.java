package walmart.walmart.utils;
import java.util.Random;

public class RandomToken {

	
	/////////////////////////////////////////////////Generating Random Characters\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	 static String getAlphaNumericString(int n)
	    {
	  
	        // lower limit for LowerCase Letters
	        int lowerLimit = 97;
	        // upper limit for LowerCase Letters
	        int upperLimit = 122;
	  
	        Random random = new Random();
	  
	        // Create a StringBuffer to store the result
	        StringBuffer r = new StringBuffer(n);
	        for (int i = 0; i < n; i++) {
	            // take a random value between 97 and 122
	            int nextRandomChar = lowerLimit
	                                 + (int)(random.nextFloat()
	                                         * (upperLimit - lowerLimit + 1));
	            // append a character at the end of bs
	            r.append((char)nextRandomChar);
	        }
	  
	        // return the resultant string
	        return r.toString();
	    }
	 
	 
	 public static String randomToken() {

			// size of random alphanumeric string
			int n = 45;

			String token = getAlphaNumericString(n);
			
			// Get and display the alphanumeric string
			System.out.println(token);
			
			return token;
			
		}
	 

}
