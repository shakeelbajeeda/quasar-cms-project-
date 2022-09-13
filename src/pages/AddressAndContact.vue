<template>
  <div class="row">
    <div class="col-md-8">
      <Address v-model:form="form" v-model:addressExpanded="addressExpanded" />
    </div>
    <div class="col-md-4">
      <q-expansion-item
        v-model="contactExpanded"
        switch-toggle-side
        :label="$t('Contact_Information')"
        class="shadow-1 q-mt-md"
        header-class="bg-blue-grey-10 text-white"
      >
        <div class="q-pa-lg q-pl-xl">
          <div class="row">
            <div class="col-2 gt-sm">
              <br />
              <p>
                <label class="float-right q-mt-sm q-mr-md">{{$t('Name')}}</label>
              </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
              <q-input
                type="text"
                row="15"
                class="q-mt-md"
                :placeholder="$t('Name')"
                filled
                :label="$q.screen.lt.md ? $t('Name') : ''"
                v-model="form.contact.name"
              />
            </div>
            <div class="col-2 gt-sm">
              <br />
              <p>
                <label class="float-right q-mt-sm q-mr-md">{{$t('Email')}}</label>
              </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
              <q-input
                type="text"
                row="15"
                class="q-mt-md"
                :placeholder="$t('Email')"
                filled
                :label="$q.screen.lt.md ? $t('Email') : ''"
                v-model="form.contact.email"
              />
            </div>
            <div class="col-2 gt-sm">
              <br />
              <p>
                <label class="float-right q-mt-sm q-mr-md">{{$t('Phone')}}</label>
              </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
              <q-input
                type="text"
                row="15"
                class="q-mt-md"
                :placeholder="$t('Phone')"
                filled
                :label="$q.screen.lt.md ? $t('Phone') : ''"
                v-model="form.contact.phone"
              />
            </div>
            <div class="col-2 gt-sm">
              <br />
              <p>
                <label class="float-right q-mt-sm q-mr-md">{{$t('Message')}}</label>
              </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
              <q-input
                type="textarea"
                row="15"
                class="q-mt-md"
                :placeholder="$t('Message')"
                filled
                :label="$q.screen.lt.md ? $t('Message') : ''"
                v-model="form.contact.comment"
              />
            </div>
          </div>
        </div>
      </q-expansion-item>
    </div>
  </div>
</template>
<script>

import Address from "components/comps/Address";
export default {
  name: "view",
  props:['form','addressExpanded','contactExpanded'],
  components: {
    Address,
  },
};
</script>
