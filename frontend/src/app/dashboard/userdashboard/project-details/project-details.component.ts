import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/services/projects/project.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['../userdashboard.component.css', './project-details.component.css']
})
export class ProjectDetailsComponent {

  id: any = "";
  userEmail: string = "";

  constructor(
    private project: ProjectService,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show()
    this.auth.getUser().then((res: any) => {
      this.userEmail = res.email;
    })


  }

  projectstask: any = [];

  isUpdateForm: boolean = false;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.viewTasks();
  }

  ngOnChanges() {

  }

  addTaskForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    description: new FormControl(''),
    created_by: new FormControl(''),
    project_name: new FormControl(this.id),
    assigned_by: new FormControl(''),
    assigned_to: new FormControl(''),
    tags: new FormControl(''),
    due_date: new FormControl(''),
    status: new FormControl('Open'),
    priority: new FormControl(''),
    comments: new FormControl(''),
    created_at: new FormControl(''),
    updated_at: new FormControl('')
  })

  viewTasks = () => {
    this.project.projectTask({ id: this.id })
      .subscribe((res) => {
        this.projectstask = res;
        this.spinner.hide();
      })

  }

  addTask = () => {
    this.spinner.show();
    let data = this.addTaskForm.value;
    data.project_name = this.id;
    data.created_by = this.userEmail;
    this.project.createTask(data)
      .subscribe((res: any) => {
        console.log(res)
        this.showAddProjectForm = false;
        this.projectstask.push(res.success)
        this.addTaskForm.reset();
        this.spinner.hide()
      })
  }

  updateTask = (data: any) => {
    this.addTaskForm.setValue(data);
    this.showAddProjectForm = true;
    this.isUpdateForm = true;
  }

  updateTaskForm = () => {
    this.spinner.show();
    this.project.updateTask(this.addTaskForm.value)
      .subscribe((res: any) => {
        this.showAddProjectForm = false;
        this.isUpdateForm = false;
        this.spinner.hide();
      })
  }

  deleteTask(data: any, id: number) {
    this.spinner.show();
    this.project.deleteTask({ id: data })
      .subscribe((res:any) => {
        console.log(res)
        console.log("Deleted Successfully");
        this.projectstask.splice(id, 1)
        this.spinner.hide()
      })
  }


  showAddProjectForm: boolean = false;
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

