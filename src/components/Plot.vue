<template>

    <GridLayout columns="*, *">
        <StackLayout col="0">
            <TextField  v-model="entity.project" hint="Project/Site" />
            <TextField  v-model="entity.city" hint="City/County" />
            <TextField  v-model="entity.applicant" hint="Applicant/Owner" />
            <TextField  v-model="entity.state" hint="State" />
            <TextField  v-model="entity.samplingPoint" hint="Sampling Point" />
        </StackLayout>
        <StackLayout col="1">
            <Label text="Sampling Date" />
            <DatePicker v-model="entity.samplingDate" height="60" />
            <TextField  v-model="entity.investigators" hint="Investigators" />
            <TextField  v-model="entity.township" hint="Section, Township, Range" />
            <TextField  v-model="entity.landform" hint="Landform" />
            <TextField  v-model="entity.localRelief" hint="Local relief" />
            <TextField  v-model="entity.slope" hint="Slope (%)" />

            <Label text="Subregion" />
            <ListPicker :items="listOfSubregions"
                        v-model="entity.subregion"
                        height="60"
                        width="120"
                        horizontalAlignment="left"
                        @selectedIndexChange="selectedIndexChanged" />

            <Button text="Button" @tap="onButtonTap" />
        </StackLayout>
    </GridLayout>
</template>

<script>
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
                },
                listOfSubregions: ["LRR", "MLRA"],
            }
        },
        methods: {
            onButtonTap () {
                console.log(this.entity)
            },
            selectedIndexChanged() {
                console.log('Changed subregion')
            }
        }
    };
</script>