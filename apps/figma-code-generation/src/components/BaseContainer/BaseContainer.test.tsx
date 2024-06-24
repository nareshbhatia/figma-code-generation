import { BaseContainer } from './BaseContainer';
import { render, screen } from '@/test/test-utils';

describe('<BaseContainer />', () => {
  it('should render correctly', () => {
    render(<BaseContainer>Hello, World!</BaseContainer>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
