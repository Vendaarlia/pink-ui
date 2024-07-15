import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card component with provided props', () => {
    render(
        <Card
        title="Card"
        textOne="This card test"
        textTwo="This need to render"
        imageSrc="image.png"
        />
    );

    expect(screen.getByText('Card')).toBeInTheDocument();
    expect(screen.getByText('This card test')).toBeInTheDocument();
    expect(screen.getByText('This need to render')).toBeInTheDocument();
    expect(screen.getByAltText('Card Image')).toHaveAttribute('src', 'image.png');

})