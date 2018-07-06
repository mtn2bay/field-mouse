<template>
    <GridLayout columns="*, *">
        <StackLayout col="0">
            <TextField  v-model="entity.project" hint="Project/Site" />
            <TextField  v-model="entity.city" hint="City/County" />
            <TextField  v-model="entity.applicant" hint="Applicant/Owner" />
            <TextField  v-model="entity.state" hint="State" />
            <TextField  v-model="entity.samplingPoint" hint="Sampling Point" />
            <TextField  v-model="entity.investigators" hint="Investigators" />
            <TextField  v-model="entity.township" hint="Section, Township, Range" />
            <TextField  v-model="entity.landform" hint="Landform" />
            <TextField  v-model="entity.localRelief" hint="Local relief" />
            <TextField  v-model="entity.slope" hint="Slope (%)" />
            <TextField  v-model="entity.soilMap" hint="Soil Map Unit Name" />
            <TextField  v-model="entity.nwi" hint="NWI Classification" />

            <StackLayout orientation="horizontal">
                <Switch v-model="entity.climatic" />
                <Label text="Climatic / Hydrologic Conditions" />
            </StackLayout>

        </StackLayout>
        <StackLayout col="1">
            <Label text="Sampling Date" />
            <DatePicker v-model="entity.samplingDate" height="60" />

            <StackLayout>
                <Button text="Get location" @tap="enableLocationServices" :visibility="currentGeoLocation.latitude ? 'collapsed' : 'visible'" />
                <StackLayout :visibility="currentGeoLocation.latitude ? 'visible' : 'collapsed'">
                    <Label :text="'Latitude: ' + currentGeoLocation.latitude" />
                    <Label :text="'Longitude: ' + currentGeoLocation.longitude" />
                </StackLayout>
            </StackLayout>

            <Label text="Subregion" />
            <ListPicker :items="listOfSubregions"
                        v-model="entity.subregion"
                        height="60"
                        width="120"
                        horizontalAlignment="left"/>

            <Label text="Datum" />
            <ListPicker :items="listOfDatum"
                        v-model="entity.datum"
                        height="60"
                        width="120"
                        horizontalAlignment="left"/>

        </StackLayout>
    </GridLayout>
</template>

<script>
    import * as geolocation from 'nativescript-geolocation';
    import * as listviewModule from 'nativescript-ui-listview';

    export default {
        data () {
            return {
                entity: {
                    project: '',
                    city: '',
                    samplingDate: new Date,
                    applicant: '',
                    state: '',
                    samplingPoint: '',
                    investigators: '',
                    township: '',
                    landform: '',
                    localRelief: '',
                    slope: '',
                    subregion: '',
                    climatic: false
                },
                listOfSubregions: ["LRR", "MLRA"],
                listOfDatum: ["WGS84", "NAD83"],
                currentGeoLocation: {
                    latitude: null,
                    longitude: null,
                    altitude: null,
                    direction: null
                },
            }
        },
        methods: {
            enableLocationServices () {
                geolocation.isEnabled().then(enabled => {
                    if (!enabled) {
                        geolocation.enableLocationRequest().then(() => this.showLocation());
                    } else {
                        this.showLocation();
                    }
                });
            },
            showLocation () {
                geolocation.watchLocation(location => {
                    this.currentGeoLocation = location;
                }, error => {
                    alert(error);
                }, {
                    desiredAccuracy: 3,
                    updateDistance: 10,
                    minimumUpdateTime: 1000 * 1
                });
            },
        }
    };
</script>