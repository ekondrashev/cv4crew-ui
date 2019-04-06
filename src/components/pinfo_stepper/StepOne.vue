<template>
  <div style="padding: 2rem 3rem; text-align: left;">

    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input
          :class="['input', $v.form.firstName.$error ? 'is-danger' : '']"
          type="text"
          placeholder="First Name input"
          v-model="form.firstName"
        />
      </div>
      <p v-if="$v.form.firstName.$error" class="is-danger">
        This username is invalid
      </p>
    </div>
    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input
          :class="['input', $v.form.lastName.$error ? 'is-danger' : '']"
          type="text"
          placeholder="First Name input"
          v-model="form.lastName"
        />
      </div>
      <p v-if="$v.form.lastName.$error" class="is-danger">
        This Last Name is invalid
      </p>
    </div>
    <div class="field">
      <label class="label">Middle Name</label>
      <div class="control">
        <input
          :class="['input', $v.form.middleName.$error ? 'is-danger' : '']"
          type="text"
          placeholder="Middle Name input"
          v-model="form.middleName"
        />
      </div>
      <p v-if="$v.form.middleName.$error" class="is-danger">
        This Last Name is invalid
      </p>
    </div>
    <div class="field">
      <label class="label">Gender</label>
      <div class="control">
        <input type="radio" id="male" value="male"
               :class="['radio', $v.form.gender.$error ? 'is-danger' : '']"
               v-model="form.gender">
        <label for="male">male</label>
        <br>
        <input type="radio" id="female" value="female"
               :class="['radio', $v.form.gender.$error ? 'is-danger' : '']"
               v-model="form.gender">
        <label for="female">female</label>
      </div>
      <p v-if="$v.form.gender.$error" class="is-danger">
        Please select your gender
      </p>
    </div>
    <div class="field">
      <label class="label">Birth Date</label>
      <div class="control">
        <input
          :class="['input', $v.form.birthDate.$error ? 'is-danger' : '']"
          type="date"
          v-model="form.birthDate"
        />
      </div>
      <p v-if="$v.form.birthDate.$error" class="is-danger">
        The Birth date should be filled
      </p>
    </div>
    <div class="field">
      <label class="label">Place of birth</label>
      <div class="control">
        <input
          :class="['input', $v.form.birthPlace.$error ? 'is-danger' : '']"
          type="text"
          placeholder="Place of birth input"
          v-model="form.birthPlace"
        />
      </div>
      <p v-if="$v.form.birthPlace.$error" class="is-danger">
        This Place of birth is invalid
      </p>
    </div>
    <div class="field">
      <label class="label">Nationality</label>
      <div class="control">
        <input
          :class="['input', $v.form.nationality.$error ? 'is-danger' : '']"
          type="text"
          placeholder="Place of nationality input"
          v-model="form.nationality"
        />
      </div>
      <p v-if="$v.form.nationality.$error" class="is-danger">
        This Place of nationality is invalid
      </p>
    </div>
    <div class="field">
      <label class="label">Country of Residence</label>
      <div class="control">
        <select class="input" v-model="form.country_residence">
          <option value="" hidden selected>Select Country of Residence</option>
          <option v-for="(item, key) in countries" :value="item">
            {{item}}
          </option>
        </select>
      </div>
      <p v-if="$v.form.country_residence.$error" class="is-danger">
        This Place of Country of Residence is invalid
      </p>
    </div>
    <div class="field">
      <label class="label">Country Region of Residence</label>
      <div class="control">
        <input
        :class="['input', $v.form.country_reg_residence.$error ? 'is-danger' : '']"
        type="text"
        placeholder="Place of Country Region of Residence input"
        v-model="form.country_reg_residence"
        />
      </div>
      <p v-if="$v.form.country_reg_residence.$error" class="is-danger">
        Please select Place of Country Region of Residence
      </p>
    </div>
    <div class="field">
      <label class="label">Nearest Airport</label>
      <div class="control">
        <input
          :class="['input', $v.form.airport.$error ? 'is-danger' : '']"
          type="text"
          placeholder="Place of Nearest Airport input"
          v-model="form.airport"
        />
      </div>
      <p v-if="$v.form.airport.$error" class="is-danger">
        This Place of Country Region of Residence is invalid
      </p>
    </div>
    <div class="field">
      <label class="label">Citizenship</label>
      <div class="control">
        <input
          :class="['input', $v.form.citizenship.$error ? 'is-danger' : '']"
          type="text"
          placeholder="Place of Citizenship input"
          v-model="form.citizenship"
        />
      </div>
      <p v-if="$v.form.citizenship.$error" class="is-danger">
        This Place of Citizenship is invalid
      </p>
    </div>
    <div class="field">
      <label class="label">Marital Status</label>
      <div class="control">
        <input type="radio" id="single" value="single"
               :class="['radio', $v.form.marital_status.$error ? 'is-danger' : '']"
               v-model="form.marital_status">
        <label for="single">single</label>
        <br>
        <input type="radio" id="married" value="married"
               :class="['radio', $v.form.marital_status.$error ? 'is-danger' : '']"
               v-model="form.marital_status">
        <label for="married">married</label>
      </div>
      <p v-if="$v.form.marital_status.$error" class="is-danger">
        Please select your Marital Status
      </p>
    </div>
    <div class="field">
      <label class="label">Military Service</label>
      <div class="control">
        <input type="radio" id="completed" value="completed"
               :class="['radio', $v.form.military_service.$error ? 'is-danger' : '']"
               v-model="form.military_service">
        <label for="completed">completed</label>
        <br>
        <input type="radio" id="pending" value="pending"
               :class="['radio', $v.form.military_service.$error ? 'is-danger' : '']"
               v-model="form.military_service">
        <label for="pending">pending</label>
        <br>
        <input type="radio" id="not obligated" value="not obligated"
               :class="['radio', $v.form.military_service.$error ? 'is-danger' : '']"
               v-model="form.military_service">
        <label for="not obligated">not obligated</label>
      </div>
      <p v-if="$v.form.military_service.$error" class="is-danger">
        Please select your Military Service
      </p>
    </div>

  </div>
</template>

<script>
  var Cv4Crew = require('cv4_crew')
  console.log(Cv4Crew.Countries)
  import {validationMixin} from 'vuelidate'
  import {required, minLength, alpha} from 'vuelidate/lib/validators'

  var defaultClient = Cv4Crew.ApiClient.instance
  console.log('Default client')
  defaultClient.basePath = 'https://cv4crew-api.herokuapp.com/v1'
  console.log(defaultClient)
  const api = new Cv4Crew.DefaultApi()
  console.log('Default Api')
  console.log(api)
  var callback = function (error, data, response) {
    if (error) {
      console.error(error)
    } else {
      console.log('API called successfully. Returned data: ' + data)
    }
  }
  api.getPersonalDetails(callback)
  export default {
    props: ['clickedNext', 'currentStep'],
    mixins: [validationMixin],
    data () {
      return {
        form: {
          firstName: '',
          lastName: '',
          middleName: '',
          gender: '',
          birthDate: '',
          birthPlace: '',
          nationality: '',
          country_residence: '',
          country_reg_residence: '',
          airport: '',
          citizenship: '',
          marital_status: '',
          military_service: '',
          countries: []
        }
      }
    },
    validations: {
      form: {
        firstName: {
          required,
          minLength,
          alpha
        },
        lastName: {
          required,
          minLength,
          alpha
        },
        middleName: {
          alpha
        },
        gender: {
          required
        },
        birthDate: {
          required
        },
        birthPlace: {
          required
        },
        nationality: {
          required,
          alpha
        },
        country_residence: {
          required
        },
        country_reg_residence: {
          required,
          alpha
        },
        airport: {
          required
        },
        citizenship: {
          required
        },
        marital_status: {
          required
        },
        military_service: {
          required
        }
      }
    },
    watch: {
      $v: {
        handler: function (val) {
          if (!val.$invalid) {
            this.$emit('can-continue', {value: true})
          } else {
            this.$emit('can-continue', {value: false})
            setTimeout(() => {
              this.$emit('change-next', {nextBtnValue: false})
            }, 3000)
          }
        },
        deep: true
      },

      clickedNext (val) {
        console.log(val)
        if (val === true) {
          this.$v.form.$touch()
        }
      }
    },
    mounted () {
      if (!this.$v.$invalid) {
        this.$emit('can-continue', {value: true})
      } else {
        this.$emit('can-continue', {value: false})
      }
    },
    created () {
      console.log('call created()')
      this.countries = Object.values(Cv4Crew.Countries).slice(0, -1)
    }
  }

</script>

<style scoped>
  .is-danger {
    color: #FF0000;
  }

</style>

