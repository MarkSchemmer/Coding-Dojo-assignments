   
   
   
    public class ContainsSpecialCharsAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext ValidationContext)
        {
            var _ = (UserContext) ValidationContext.GetService(typeof(UserContext));
            var str = value as string;
            if(String.IsNullOrEmpty(str))
            {
                return new ValidationResult(
                "Password is is null or Empty, also"+
                " must contain a special character ");
            }
            var numbs = Enumerable.Range(0,9).Select(x => Convert.ToChar(x));
            var chars = "[!@#$%^&*()_+-=[]{};':|,.<>/?]".ToCharArray();
            var PasswordCheck = (str.Any(x => chars.Contains(x)) && str.Any(x => numbs.Contains(x)));
            if(PasswordCheck)
                return ValidationResult.Success;
            else
                return new ValidationResult("Password must contain a letter number and special character");
        }
    }