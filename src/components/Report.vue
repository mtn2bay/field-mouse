<template>
  <Page>
    <ActionBar>
      <Label>
        <FormattedString>
          <Span text="field" fontSize="20" fontWeight="bold" />
          <Span text="Mouse" fontSize="20" />
        </FormattedString>
      </Label>
    </ActionBar>

    <TabView>
      <TabViewItem title="Plot">
        <Plot></Plot>
      </TabViewItem>
      <TabViewItem title="Hydrology">
        <Hydrology></Hydrology>
      </TabViewItem>
      <TabViewItem title="Vegetation">
        <Vegetation></Vegetation>
      </TabViewItem>
      <TabViewItem title="Soils">
        <Soils></Soils>
      </TabViewItem>
      <TabViewItem title="Summary">
        <Summary></Summary>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
  import Plot from './Plot'
  import Hydrology from './Hydrology'
  import Vegetation from './Vegetation'
  import Soils from './Soils'
  import Summary from './Summary'

  export default {
      components: { Plot, Hydrology, Vegetation, Soils, Summary },
      mounted: function () {
          console.log('loaded')
      }
  };
</script>