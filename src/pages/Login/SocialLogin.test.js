import { render, screen } from '@testing-library/react'
import SocialLogin from './SocialLogin'

test('renders learn react link', () => {
   render(<SocialLogin />)
   const linkElement = screen.getByText(/Connexion/i)
   expect(linkElement).toBeInTheDocument()
})
