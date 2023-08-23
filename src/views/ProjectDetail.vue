<template>
    <section class="projectdetail" v-if="loading && !error">
        <div class="path"><RouterLink to="/projects">projects</RouterLink> / </div>
        <div class="source-code">
            <i class="bi-file-earmark-zip"></i>
            Source code
            <p class="source-code-size"></p>
        </div>
        <div class="info">
            <i class="bi-info-square"></i>
            Info
        </div>
        <div class="readme">
            <div class="readme-header"><i class="bi-book"></i> README.md</div>
        </div>
    </section>
    <section class="projectdetail" v-else-if="!error">
        <div class="projectdetail__path"><RouterLink to="/projects">projects</RouterLink> / {{ data.name }}</div>
        <a v-if="file.path" :href="file.path" target="_blank" class="source-code">
            <i class="bi-file-earmark-zip"></i>
            {{ $t("projects.source") }}
            <p class="source-code__size">{{ file.size }}</p>
        </a>
        <div class="info">
            <i class="bi-info-square"></i>
            {{ $t(`projects.${data.name}`)}}
        </div>
        <div v-if="readme" class="readme">
            <div class="readme__header"><i class="bi-book"></i> README.md</div>
            <Suspense>
                <Readme class="readme__readme" :source="readme"/>
            </Suspense>
        </div>
    </section>
    <section v-else class="error">
        <h1 class="error__title">404 Project not found</h1>
        <p class="error__subtitle">Unfortunately, the project {{ name }} cannot be found.</p>
        <RouterLink class="error__link" to="/projects">Go to Projects ➜</RouterLink>
    </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
import Readme from '@/components/Readme.vue'
export default {
    data() {
        return {
            loading: true,
            data: null,
            error: false,
            file: {
                path: null,
                size: null
            },
            readme: null
        }
    },
    setup() {
        const store = useStore();

        let projects = computed(function() {
            return store.getters.projects
        })

        return {
            projects
        }
    },
    async mounted() {
        function UrlExists(url) {
            var http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();
            return http.status!=404;
        }
        this.name = this.$route.params.name;
        this.data = this.projects.find(x => x.name === this.name)
        if (!this.data) {
            this.error = true
        } else {
            if (UrlExists(`/src/assets/projects/${this.data.name}/README.md`)) {
                this.readme = `/src/assets/projects/${this.data.name}/README.md`
            }
            if (UrlExists(`/src/assets/projects/${this.data.name}/Source code.zip`)) {
                this.file.path = `/src/assets/projects/${this.data.name}/Source code.zip`
                const rawFileSize = await fetch('/src/assets/projects/discord-bot-template/Source code.zip')
                    .then(response => response.blob())
                    .then(blob => {
                        return blob.size
                    })
                function humanFileSize(bytes, si=false, dp=1) {
                    const thresh = si ? 1000 : 1024;
                    if (Math.abs(bytes) < thresh) {
                        return bytes + ' B';
                    }
                    const units = si 
                        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
                        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
                    let u = -1;
                    const r = 10**dp;
                    do {
                        bytes /= thresh;
                        ++u;
                    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
                    return bytes.toFixed(dp) + ' ' + units[u];
                }
                this.file.size = humanFileSize(rawFileSize, true)
            }
            this.loading = false
        }
    },
    components: {
        Readme,
        RouterLink
    }
}
</script>

<style lang="scss" scoped>
.projectdetail {
    margin-bottom: 1rem;
    &__path {
        margin: 20px 0;
        padding: 10px;
    }
}
.source-code {
    display: flex;
    flex-direction: row;
    gap: 10px;
    border: 2px solid var(--background-color2);
    border-radius: 15px;
    line-height: 20px;
    padding: 10px;
    margin: 10px 0;
    color: var(--text-color1);
    &__size {
        margin-left: auto;
    }
}
.info {
    display: flex;
    flex-direction: row;
    gap: 10px;
    border: 2px solid var(--background-color2);
    border-radius: 15px;
    line-height: 20px;
    padding: 10px;
    margin: 10px 0;
    color: var(--text-color1);
}
.readme {
    display: flex;
    flex-direction: column;
    border: 2px solid var(--background-color2);
    border-radius: 15px;
    &__header {
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 10px;
        border-bottom: 2px solid var(--background-color2);
        line-height: 20px;
    }
    &__readme {
        padding: 10px;
    }
}
.error {
    text-align: center;
    line-height: 3rem;
    &__title {
        font-size: 2rem;
    }
    &__subtitle {
        color: var(--text-color3);
    }
    &__link {
        color: var(--text-color2);
        transition: color .35s;
        text-decoration: none;
    }
}
</style>