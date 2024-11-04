import {email, required} from "@vuelidate/validators";

const SignInForm = {
    rows: [
        {
            blocks: [
                {
                    fields: [
                        {
                            name: 'email',
                            type: 'text',
                            label: 'Email'
                        }
                    ]
                }
            ]
        },
        {
            blocks: [
                {
                    fields: [
                        {
                            name: 'password',
                            type: 'password',
                            label: 'Password'
                        }
                    ]
                }
            ]
        },
    ],
    validations: {
        email: {
            required
        },
        password: {
            required
        }
    },
    errors: {
        email: {
            email: "Enter a valid email"
        }
    }
}

export {
    SignInForm
}
