<template>
  <div class="kt-portlet kt-portlet--mobile">
    <!--begin: tableHead -->
    <table-head tableName="Customers" addUrl="/customers/add"></table-head>
    <!--begin: tableHead -->

    <!--begin: search Field -->
    <search-input></search-input>
    <!--begin: search Field -->

    <div class="kt-portlet__body kt-portlet__body--fit">
      <!--begin: Datatable -->
      <custom-table :th="customersTh"></custom-table>
      <!--end: Datatable -->
    </div>
  </div>
</template>
<script>
import tableHead from '@/components/globalPartials/tableHead'
import searchInput from '@/components/globalPartials/searchInput'
import customTable from '@/components/globalPartials/customTable'
export default {
  name: 'customers',
  components: {
    tableHead,
    searchInput,
    customTable
  },
  data() {
    return {
      customersTh: [
        'Name',
        'Email',
        'Domain',
        'Status',
        'Created By',
        'Created At',
        ''
      ]
    }
  }
}
</script>
