import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

// Services
import { BooksService } from './Shared/Services/books.service';
import { CoversService } from './Shared/Services/covers.service';
import { AuthorClient, BooksClient, GenreClient } from './Shared/Services/api.v1.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './Modules/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FilterComponent } from './modules/home/partial/filter/filter.component';
import { CardComponent } from './shared/components/card/card.component';
import { SbcButtonComponent } from './shared/components/sbc-button/sbc-button.component';
import { SkeletonComponent } from './shared/components/skeleton/skeleton.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NoticeDialog } from './Modules/home/partial/notice-dialog/noticeDialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilterComponent,
    CardComponent,
    SbcButtonComponent,
    SkeletonComponent,
    FooterComponent,
    NoticeDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    // Material
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [BooksService, AuthorClient, BooksClient, GenreClient, CoversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
