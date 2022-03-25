<script>
export default {
  components: {},
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style>
.gap {
  margin-top: 100px;
}

button.btn-extra,
a.button.btn-extra,
input[type="button"].button.btn-extra {
  font-size: 1em;
  height: 70px;
  padding: 0;
  text-transform: uppercase;
  background: transparent;
  color: #fff;
  line-height: 1.5em;
  border: 1px solid #01b7f2;
  border-left: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 0;
  display: inline-table;
  table-layout: fixed;
  margin-right: 10px;
  margin-bottom: 10px;
}

button.btn-extra > i,
a.button.btn-extra > i,
input[type="button"].button.btn-extra > i {
  width: 55px;
  vertical-align: middle;
  background: #01b7f2;
  color: #2d3e52;
  font-size: 36px;
  display: table-cell;
  height: 70px;
  text-align: right;
  padding-right: 8px;
}

button.btn-extra > i:after,
a.button.btn-extra > i:after,
input[type="button"].button.btn-extra > i:after {
  display: block;
  content: "";
  position: absolute;
  left: 55px;
  border-bottom: 70px solid #01b7f2;
  border-right: 16px solid transparent;
  top: 0;
  bottom: 0;
}

button.btn-extra > span,
a.button.btn-extra > span,
input[type="button"].button.btn-extra > span {
  display: table-cell;
  vertical-align: middle;
  padding: 0 20px 0 35px;
  text-align: left;
}

button.btn-extra > span em,
a.button.btn-extra > span em,
input[type="button"].button.btn-extra > span em {
  color: #01b7f2;
  font-size: 1.6667em;
  font-weight: bold;
  font-style: normal;
}

button.btn-extra:hover,
a.button.btn-extra:hover,
input[type="button"].button.btn-extra:hover {
  color: inherit;
  background: #fff;
  border: none;
  border-right: 1px solid transparent !important;
}

button.btn-extra:hover > i,
a.button.btn-extra:hover > i,
input[type="button"].button.btn-extra:hover > i {
  color: #fff;
}

button.btn-extra.blue,
a.button.btn-extra.blue,
input[type="button"].button.btn-extra.blue {
  border-color: #01b7f2;
}

button.btn-extra.blue > i,
a.button.btn-extra.blue > i,
input[type="button"].button.btn-extra.blue > i {
  background: #01b7f2;
}

button.btn-extra.blue > i:after,
a.button.btn-extra.blue > i:after,
input[type="button"].button.btn-extra.blue > i:after {
  border-bottom-color: #01b7f2;
}

button.btn-extra.blue > span em,
a.button.btn-extra.blue > span em,
input[type="button"].button.btn-extra.blue > span em {
  color: #01b7f2;
}

button.btn-extra.yellow,
a.button.btn-extra.yellow,
input[type="button"].button.btn-extra.yellow {
  border-color: #fdb714;
}

button.btn-extra.yellow > i,
a.button.btn-extra.yellow > i,
input[type="button"].button.btn-extra.yellow > i {
  background: #fdb714;
}

button.btn-extra.yellow > i:after,
a.button.btn-extra.yellow > i:after,
input[type="button"].button.btn-extra.yellow > i:after {
  border-bottom-color: #fdb714;
}

button.btn-extra.yellow > span em,
a.button.btn-extra.yellow > span em,
input[type="button"].button.btn-extra.yellow > span em {
  color: #fdb714;
}
body {
  background-color: #f9f9fa;
}

.padding {
  padding: 3rem !important;
}

.user-card-full {
  overflow: hidden;
}

.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  border: none;
  margin-bottom: 30px;
}

.m-r-0 {
  margin-right: 0px;
}

.m-l-0 {
  margin-left: 0px;
}

.user-card-full .user-profile {
  border-radius: 5px 0 0 5px;
}

.bg-c-lite-green {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#f29263),
    to(#ee5a6f)
  );
  background: linear-gradient(to right, #ee5a6f, #f29263);
}

.user-profile {
  padding: 20px 0;
}

.card-block {
  padding: 1.25rem;
}

.m-b-25 {
  margin-bottom: 25px;
}

.img-radius {
  border-radius: 5px;
}

h6 {
  font-size: 14px;
}

.card .card-block p {
  line-height: 25px;
}

@media only screen and (min-width: 1400px) {
  p {
    font-size: 14px;
  }
}

.card-block {
  padding: 1.25rem;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
  margin-bottom: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.card .card-block p {
  line-height: 25px;
}

.m-b-10 {
  margin-bottom: 10px;
}

.text-muted {
  color: #919aa3 !important;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
  font-weight: 600;
}

.m-b-20 {
  margin-bottom: 20px;
}

.m-t-40 {
  margin-top: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.m-b-10 {
  margin-bottom: 10px;
}

.m-t-40 {
  margin-top: 20px;
}

.user-card-full .social-link li {
  display: inline-block;
}

.user-card-full .social-link li a {
  font-size: 20px;
  margin: 0 10px 0 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>
<template>
  <v-card class="mx-auto overflow-hidden" height="auto">
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>JINTAIAPP</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ตารางวันหยุด</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>รายงานKPI</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <v-card max-width="1200">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
              <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="block">
                    <div class="d-flex justify-content-center h-30 gap">
                      <a class="button btn-extra" data-abc="true">
                        <v-icon dark right> mdi-format-list-checks</v-icon
                        ><span>แจ้งลางาน<br /><em>แจ้งลางาน</em></span></a
                      >
                      <a
                        class="button btn-extra yellow"
                        data-abc="true"
                        href="/test"
                      >
                        <v-icon dark right> mdi-checkbox-marked-circle </v-icon
                        ><span
                          >รายการอนุมัติ<br /><em>รายการอนุมัติ</em></span
                        ></a
                      >
                    </div>
                  </div>
                  <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                      <div class="m-b-25">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          class="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 class="f-w-600">ณิชกานต์ อาดำ</h6>
                      <p>ช่าง ขัด</p>
                      <v-btn depressed to="/test">
                        <i
                          class="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"
                          to="/test"
                        ></i>
                        แก้ไขข้อมูล
                      </v-btn>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <h6 class="m-b-20 p-b-5 b-b-default f-w-600"></h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">ชื่อนามสกุล</p>
                          <h6 class="text-muted f-w-400">ณิชกานต์ อาดำ</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">เบอร์ติดต่อ</p>
                          <h6 class="text-muted f-w-400">98979989898</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">รหัสพนักงาน</p>
                          <h6 class="text-muted f-w-400">98979989898</h6>
                        </div>
                      </div>
                      <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        ข้อมูล
                      </h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">แผนก</p>
                          <h6 class="text-muted f-w-400">#####</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">ตำแหน่ง</p>
                          <h6 class="text-muted f-w-400">#####</h6>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">สถานะภาพ</p>
                          <h6 class="text-muted f-w-400">#####</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">ประเภทพนักงาน</p>
                          <h6 class="text-muted f-w-400">#####</h6>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">จำนวนวันทดลองงาน</p>
                          <h6 class="text-muted f-w-400">#####</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">วันเดือน/เกิด</p>
                          <h6 class="text-muted f-w-400">#####</h6>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">โอที</p>
                          <h6 class="text-muted f-w-400">#####</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">อายุ</p>
                          <h6 class="text-muted f-w-400">#####</h6>
                        </div>
                      </div>
                      <ul class="social-link list-unstyled m-t-40 m-b-10">
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="facebook"
                            data-abc="true"
                            ><i
                              class="mdi mdi-facebook feather icon-facebook facebook"
                              aria-hidden="true"
                            ></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="twitter"
                            data-abc="true"
                            ><i
                              class="mdi mdi-twitter feather icon-twitter twitter"
                              aria-hidden="true"
                            ></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="instagram"
                            data-abc="true"
                            ><i
                              class="mdi mdi-instagram feather icon-instagram instagram"
                              aria-hidden="true"
                            ></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-container>
  </v-card>
</template>
