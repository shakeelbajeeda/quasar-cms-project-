<template>
  <q-expansion-item
    v-model="addressExpanded"
    switch-toggle-side
    :label="$t('Address_Info')"
    class="shadow-1 q-mt-md"
    header-class="bg-blue-grey-10 text-white"
  >
    <div class="q-pa-lg">
      <div class="row">
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">{{$t('My_Location')}}</label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-11 col-lg-11">
          <GetCoordinates @update-location="setCoordinates" />
        </div>
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">Lat</label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-input
            :disable="true"
            type="text"
            class="q-mt-md"
            :placeholder="$t('Coordinates')"
            filled
            v-model="form.address.lat"
            :label="$q.screen.lt.md ? $t('Coordinates') : $t('Coordinates')"
          >
            <template v-slot:prepend>
              <q-icon name="my_location" />
            </template>
          </q-input>
        </div>
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">Long</label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-input
            :disable="true"
            type="text"
            class="q-mt-md"
            :placeholder="$t('Coordinates')"
            filled
            v-model="form.address.lat"
           :label="$q.screen.lt.md ? $t('Coordinates') : $t('Coordinates')"
          >
            <template v-slot:prepend>
              <q-icon name="my_location" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="row">
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">{{$t('Address')}}</label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-11 col-lg-11">
          <q-input
            type="text"
            row="15"
            class="q-mt-md"
            :placeholder="$t('Enter_Full_Address')"
            filled
            :label="$q.screen.lt.md ? $t('Full_Address') : ''"
            v-model="form.address.address"
            :rules="[
              (val) => (val && val.length > 0) || $t('Please_type_something'),
            ]"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">{{$t('Street')}}</label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-input
            type="text"
            row="15"
            class="q-mt-md"
            :placeholder="$t('Enter_Street')"
            filled
            :label="$q.screen.lt.md ? $t('Street') : ''"
            v-model="form.address.street"
            :rules="[
              (val) => (val && val.length > 0) || $t('Please_type_something'),
            ]"
          />
        </div>
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">{{$t('City')}}</label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-input
            type="text"
            row="15"
            class="q-mt-md"
            :placeholder="$t('Enter_City')"
            filled
            :label="$q.screen.lt.md ? $t('City') : ''"
            v-model="form.address.city"
            :rules="[
              (val) => (val && val.length > 0) || $t('Please_type_something'),
            ]"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">{{$t('County')}}</label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-input
            type="text"
            row="15"
            class="q-mt-md"
            :placeholder="$t('Enter_County')"
            filled
            :label="$q.screen.lt.md ? $t('County') : ''"
            v-model="form.address.county"
            :rules="[
              (val) => (val && val.length > 0) || $t('Please_type_something'),
            ]"
          />
        </div>
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">
              {{$t('State')}}
            </label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-input
            type="text"
            row="15"
            class="q-mt-md"
            :placeholder="$t('Enter_State')"
            filled
            :label="$q.screen.lt.md ? $t('State') : ''"
            v-model="form.address.state"
            :rules="[
              (val) => (val && val.length > 0) || $t('Please_type_something'),
            ]"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">{{$t('Zip')}}</label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-input
            type="text"
            row="15"
            class="q-mt-md"
            :placeholder="$t('Enter_Zip_Code')"
            filled
            :label="$q.screen.lt.md ? $t('Zip') : ''"
            v-model="form.address.zip"
            :rules="[
              (val) => (val && val.length > 0) || $t('Please_type_something'),
            ]"
          />
        </div>
        <div class="col-1 gt-sm">
          <br />
          <p>
            <label class="float-right q-mt-sm q-mr-md">
              {{$t('Country')}}
            </label>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-input
            type="text"
            row="15"
            class="q-mt-md"
            :placeholder="$t('Enter_Country')"
            filled
            :label="$q.screen.lt.md ? $t('Country') : ''"
            v-model="form.address.country"
            :rules="[
              (val) => (val && val.length > 0) || $t('Please_type_something'),
            ]"
          />
        </div>
      </div>
    </div>
  </q-expansion-item>
</template>

<script>
import GetCoordinates from "components/common/getCoordinates";
export default {
  components: {
    GetCoordinates,
  },
  props: ["form", "addressExpanded"],
  methods: {
    setCoordinates(geoDataFormated) {
      this.form.address = geoDataFormated;
    },
  },
};
</script>
