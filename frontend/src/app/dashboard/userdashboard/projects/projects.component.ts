import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ProjectService } from 'src/app/services/projects/project.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../userdashboard.component.css', './projects.component.css']
})
export class ProjectsComponent {

  constructor(
    private project: ProjectService,
    private auth: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    this.spinner.show();
    this.auth.getUser().then((res: any) => {
      this.userEmail = res.email;
      this.viewProject();
    })
  }

  projects: any;

  userEmail: string = ""


  projectForm = new FormGroup({
    id: new FormControl(''),
    project_name: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required),
    status: new FormControl('Open'),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
    team_member: new FormControl(''),
    description: new FormControl(''),
    created_at: new FormControl(''),
    updated_at: new FormControl('')
  })

  viewProject = () => {
    this.project.Project({ email: this.userEmail })
      .subscribe((res: any) => {
        this.projects = res;
        this.spinner.hide()
      })
  }

  createProject = () => {
    this.spinner.show();
    this.project.createProject(this.projectForm.value).subscribe((res: any) => {
      this.showAddProjectForm = false;
      this.projects.push(res.success)
      this.projectForm.reset();
      this.spinner.hide();
      this.toastr.success("Projected Created Succesffully");
    })
  }

  updateProject = (data: any) => {
    this.projectForm.setValue(data);
    this.showAddProjectForm = true;
    this.isUpdateForm = true;
  }

  updateProjectForm = () => {
    this.spinner.show()
    this.project.updateProject(this.projectForm.value)
      .subscribe((res: any) => {
        this.showAddProjectForm = false;
        this.isUpdateForm = false;
        this.spinner.hide();
      })
  }

  deleteProject(data: any, id: number) {
    this.spinner.show();
    this.project.deleteProject({ id: data })
      .subscribe((res) => {
        console.log(res)
        console.log("Deleted Successfully");
        this.projects.splice(id, 1);
        this.spinner.hide();
      })
  }

  showAddProjectForm: boolean = false;
  isUpdateForm: boolean = false;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
}
