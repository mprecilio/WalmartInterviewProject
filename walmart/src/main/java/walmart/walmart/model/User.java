package walmart.walmart.model;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OrderColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name="user_table")
public class User {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
	@Column(name="username", nullable = false, unique = true)
	private String username;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@Column(name="username_lower", nullable = false, unique = true)
	private String usernameLower;
	
	@ElementCollection
	@JsonProperty(access = Access.WRITE_ONLY)
    @OrderColumn(name = "user_salt", nullable = false)
    private byte[] salt;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@Column(name="password", nullable = false)
	private String password;
	
	@Column(name="fname", nullable = false)
	private String fname;
	
	@Column(name="lname", nullable = false)
	private String lname;
	
	@Column(name="dob", nullable = false)
	private Date dob;
	
	@Column(name="address", nullable = false)
	private String address;
	
	@Column(name="profile_photo", nullable = false)
	private String profilePhoto;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@Column(name="token", nullable = false)
	private String token;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@Column(name="email", nullable = false)
	private String email;
	
	public User(int userId) {
		super();
		this.userId = userId;
	}
	
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	public User(String username, String password, String fname, String lname, Date dob, String address,
			String profilePhoto) {
		super();
		this.username = username;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.dob = dob;
		this.address = address;
		this.profilePhoto = profilePhoto;
	}
	
	@JsonIgnore
	public String getUsernameLower() {
		return this.usernameLower;	
	}
	
	@JsonIgnore
	public String getPassword() {
		return this.password;	
	}
	
	@JsonIgnore
	public String getToken() {
		return this.token;
	}
	
	@JsonIgnore
	public String getEmail() {
		return this.email;
	}
	
	@JsonIgnore
	public byte[] getSalt() {
		return salt;
	}
	
	

}
