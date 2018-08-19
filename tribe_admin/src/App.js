import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Admin, Resource } from 'react-admin';
import postgrestClient from 'aor-postgrest-client';
import { List, Datagrid, TextField, SingleFieldList, ReferenceManyField, DateField, ChipField, NumberField } from 'react-admin';

import { ShowButton, EditButton, Edit, SimpleForm, DisabledInput, TextInput, NumberInput } from 'react-admin';
import { Create} from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';

import TrafficIcon from '@material-ui/icons/Traffic';
import AssignIcon from '@material-ui/icons/Assignment';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const AddressList = (props) => (
	    <List {...props} perPage={25}>
	        <Datagrid>
	            <TextField source="address" />
	            <DateField source="creation_date" ShowTime />
		    <TextField source="city" />
		    <TextField source="country" />
		    <ShowButton />
	        </Datagrid>
	    </List>
	);

export const AddressShow = (props) => (
	    <Show {...props}>
	        <SimpleShowLayout>
		    <TextField source="address" />
		    <DateField source="creation_date" ShowTime />
		    <TextField source="city" />
		    <TextField source="country" />
		    <ChipField source="country_code" />
		    <ChipField source="continent" />
		    <TextField source="latitude" />
		    <TextField source="longitude" />
		    <TextField source="org" />
		    <TextField source="asn" />
		    <TextField source="subdivision" />
		    <ReferenceManyField label="Actions" reference="offensiveactions" target="id">
                <SingleFieldList>
                    <ChipField source="action" />
                </SingleFieldList>
            </ReferenceManyField>
		</SimpleShowLayout>
	    </Show>
	);

export const OffendersList = (props) => (
		<List {...props} perPage={25}>
			<Datagrid>
				<NumberField source="count" />
				<TextField source="address" />
				<ShowButton />
			</Datagrid>
		</List>
	);

export const OffensiveActionsList = (props) => (
    <List {...props} perPage={25}>
        <Datagrid>
            <NumberField source="count" />
            <TextField source="address" />
            <ChipField source="action" />
            <ShowButton />
        </Datagrid>
    </List>
);


const App = () => (
	    <Admin dataProvider={postgrestClient('http://localhost:8888/api')}>
	        <Resource name="address_data" list={AddressList} show={AddressShow} icon={AssignIcon} />
		<Resource name="offenders" list={OffendersList} show={AddressShow} icon={TrafficIcon} />
		<Resource name="offensiveactions" list={OffensiveActionsList} show={AddressShow} icon={AnnouncementIcon} />
	    </Admin>
	);

export default App;


