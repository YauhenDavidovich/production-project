import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country/model/types/country';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    last: 'admin',
    age: 12,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Minsk',
    username: 'admin',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};
describe('features/EditableProfileCard', () => {
    test('Should switch readonly', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('On cancellation the values are reset', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), '123');
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), '123');
        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('123');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('123');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('admin');
    });

    test('Error show on validation', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('If there are no errors PUT should be sent on server', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), '123');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutReq).toHaveBeenCalled();
    });
});
